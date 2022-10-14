const sendScores = async () => {
  const user = document.querySelector('#user_name').value;
  const score = document.querySelector('#user_score').value;

  const data = {
    user,
    score,
  };

  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MdQQUvVTmlBMdKOGcWn7/scores/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  );
};

export default sendScores;