import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import { ImageUpload } from "../utils/ImageUpload";

export function useHooks() {
  const { api, login, logout, token } = useContext(AuthContext);
  const { selectedFile, preview, onSelectFile } = ImageUpload();
  const navigate = useNavigate();

  const credentialsData = {
    email: "",
    password: "",
  };

  const userData = {
    avatar: "",
    email: "",
    password: "",
    username: "",
    contact_info: "",
    status: 1,
  };

  const [credentials, setCredentials] = useState(credentialsData);
  const [user, setUserData] = useState(userData);

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
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const signUp = async () => {
    const res = await api.registerUser(user);
    login(res.token);
  };

  const logIn = async () => {
    const res = await api.loginUser(credentials);
    login(res.token);
  };

  const logOut = () => {
    logout();
    navigate("/login");
  };

  return {
    handleFileUpload,
    handleInputChange,
    logOut,
    signUp,
    logIn,
    selectedFile,
    preview,
    token,
    navigate,
  }
}
