import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState(null);

  const baseUrl = "https://api.papertalk.io";
  // const baseUrl = "http://localhost:8000";

  useEffect(() => {
    // Check if the user is authenticated on component mount
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const response = await axios.get(`${baseUrl}/auth/me`, {
        withCredentials: true,
      });
      setUser(response.data);
    } catch (error) {
      // User is not authenticated
      setUser(null);
    }
  };

  const handleLogin = () => {
    const currentUrl = window.location.href;
    // Redirect the user to the Google login page on your backend
    window.location.href = `${baseUrl}/auth/google?redirect=${encodeURIComponent(
      currentUrl
    )}`;
  };
  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch(`${baseUrl}/auth/google`, {
  //       withCredentials: true,
  //     });
  //     const data = await response.json();

  //     console.log(data);
  //   } catch (error) {
  //     // Handle network or other errors
  //     console.error("Error during authentication:", error);
  //   }
  // };

  const handleLogout = async () => {
    try {
      // Call the logout endpoint on your backend
      await axios.get(`${baseUrl}/auth/logout`, {
        withCredentials: true,
      });
      // Update the local state
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const handleProfile = async () => {
    try {
      // Call the logout endpoint on your backend
      const profile = await axios.get(`${baseUrl}/auth/me`, {
        withCredentials: true,
      });
      // Update the local state
      console.log(profile);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getPaparDetails = async () => {
    try {
      const data = await fetch(`${baseUrl}/analysis/65688bd92fd3cb155980f301`, {
        method: "GET",
        credentials: "include",
      });
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchDataForAudioSummary = async () => {
    try {
      const data = await fetch(
        `${baseUrl}/analysis/upload/65688bd92fd3cb155980f301/audiosummary`,
        { method: "POST", credentials: "include" }
      );
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleFetchDataForSementicScholar = async () => {
    try {
      const data = await fetch(
        `${baseUrl}/analysis/upload/sementic/eac8f757682e1a3e5996a547ffa09c242ecb6c66`,
        { method: "POST", credentials: "include" }
      );
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const uploadSementicScholaPaper = async () => {
    try {
      const data = await fetch(
        `${baseUrl}/upload/sementic/d57adbc1e586544f21292f973a7ec6dc9b564a4d`,
        { method: "POST", credentials: "include" }
      );
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getMyLibrarry = async () => {
    try {
      const data = await fetch(`${baseUrl}/profile/library`, {
        method: "GET",
        credentials: "include",
      });
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const getSementicScholaPaperFromUploadedPDF = async () => {
    try {
      const data = await fetch(
        `${baseUrl}/analysis/sementic/65688bd92fd3cb155980f301`,
        {
          method: "GET",
          credentials: "include",
        }
      );
      console.log("Data:", data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <div>
        <button onClick={getPaparDetails}>Paper Details</button>
        <button onClick={handleFetchDataForAudioSummary}>Audio Summary</button>
        <button onClick={handleFetchDataForSementicScholar}>
          Sementic Sholar Paper
        </button>
        <button onClick={uploadSementicScholaPaper}>
          Sementic Scholad PDF Upload
        </button>
        <button onClick={handleProfile}> My Details </button>
        <button onClick={getMyLibrarry}> All Summaries </button>
        <button onClick={getSementicScholaPaperFromUploadedPDF}>
          get sementic schola paper id for uploaded paper
        </button>
      </div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>

          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default App;
