export const getAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });
  const jsonResponse = await response.json();
  return jsonResponse.slip;
};
