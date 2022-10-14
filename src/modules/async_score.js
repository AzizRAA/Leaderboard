const asyncScores = async (container) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MdQQUvVTmlBMdKOGcWn7/scores/',
  );

  const data = await response.json();

  const { result } = data;

  container.innerText = '';
  result.forEach((item) => {
    const newScores = document.createElement('li');
    newScores.innerText = `${item.user}: ${item.score}`;
    container.appendChild(newScores);
  });
};

export default asyncScores;