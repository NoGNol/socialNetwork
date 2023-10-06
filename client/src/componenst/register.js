const register = async (user) => {
  try {
    const response = await fetch("http://localhost:5000/api/user/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error("error", error);
  }
};

export default register;
