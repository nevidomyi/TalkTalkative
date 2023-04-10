import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { ImageUpload } from "../utils/ImageUpload";

export function useHooks() {
  const { api, login, logout, token } = useContext(AuthContext);
  const { selectedFile, preview, onSelectFile } = ImageUpload();
  const navigate = useNavigate();

  const userData = {
    avatar: "",
    email: "",
    password: "",
    username: "",
    contact_info: "",
    status: 1,
  };

  const [user, setUserData] = useState(userData);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getProfile();
      setUserData(response);
    };
    fetchData();
  }, []);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setUserData((prev) => ({
      ...prev,
      avatar: base64,
    }));
    onSelectFile(e);
  };

  const handleInputChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signUp = async () => {
    const res = await api.registerUser(user);
    login(res.token);
  };

  const logIn = async () => {
    const res = await api.loginUser(user);
    login(res.token);
  };

  const logOut = () => {
    logout();
    navigate("/login");
  };

  const update = async () => {
    const res = await api.updateUser(user.id, user);

    if (res.matchedCount === 1 && res.modifiedCount === 1) {
      navigate("/user/profile");
    }
  };

  return {
    handleFileUpload,
    handleInputChange,
    logOut,
    signUp,
    logIn,
    update,
    navigate,
    selectedFile,
    preview,
    token,
    user
  }
}
