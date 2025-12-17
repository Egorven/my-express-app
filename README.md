Запуск сервера: node server.js
Главная страница 
<img width="779" height="715" alt="image" src="https://github.com/user-attachments/assets/ef8bf6da-385d-47cd-9a54-3ddb61d46a29" />

Api 
<img width="542" height="532" alt="image" src="https://github.com/user-attachments/assets/21eaa9e7-187b-4e83-89e9-8a55d5a57864" />

Команды:
Терминал Bash:

1.Получить все песни: curl http://localhost:3000/api/songs

<img width="556" height="70" alt="image" src="https://github.com/user-attachments/assets/be0377c1-4057-41ee-99ce-5291ed7bb1ad" />

2.Получить песни определённого жанра: curl "http://localhost:3000/api/songs?genre=Rock"

<img width="514" height="41" alt="image" src="https://github.com/user-attachments/assets/c07564ac-cf82-485e-b0ad-1d0a50020388" />

3.Добавить новую песню: 
curl -X POST http://localhost:3000/api/songs \
  -H "Content-Type: application/json" \
  -d '{"title": "Wonderwall", "artist": "Oasis", "genre": "Britpop"}'
  
  <img width="520" height="77" alt="image" src="https://github.com/user-attachments/assets/f74d7144-77bc-492a-8769-fcfca1a8e2e1" />

4.Обновить песню:
curl -X PUT http://localhost:3000/api/songs/4 \
  -H "Content-Type: application/json" \
  -d '{"title": "Wonderwall (Remastered)", "artist": "Oasis", "genre": "Britpop"}'
  
  ИЛИ
  
  curl -X POST http://localhost:3000/api/songs -H "Content-Type: application/json" -d '{"title": "Hey Jude", "artist": "The Beatles", "genre": "Classic Rock"}'

<img width="553" height="97" alt="image" src="https://github.com/user-attachments/assets/d6fd3bac-9fbf-4cdf-a3e7-ae72f54bbd60" />

5.Удалить песню : curl -X DELETE http://localhost:3000/api/songs/4

5.1.Попытка удалить песни которой нет - curl -X DELETE http://localhost:3000/api/songs/6

<img width="411" height="29" alt="image" src="https://github.com/user-attachments/assets/64f4ce2d-0a0b-4798-8569-029b57f083b6" />

Консоль браузера:

1.fetch('/api/songs')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

  <img width="528" height="64" alt="image" src="https://github.com/user-attachments/assets/a34c8c71-a756-4ef2-87a2-3918c68145f0" />

2.fetch('/api/songs?genre=Rock')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

<img width="493" height="43" alt="image" src="https://github.com/user-attachments/assets/d835c01e-b589-43f9-b561-1ffdd37973ec" />

3.fetch('/api/songs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Synth-pop"
  })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);

<img width="568" height="29" alt="image" src="https://github.com/user-attachments/assets/b696a552-98b9-48fa-be06-d93b4944d155" />

4.fetch('/api/songs/1')
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

5.fetch('/api/songs/2', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "Обновлённое название",
    artist: "Новый исполнитель",
    genre: "Pop"
  })
})
.then(res => res.json())
.then(console.log)
.catch(console.error);

6.fetch('/api/songs/3', {
  method: 'DELETE'
})
.then(() => console.log('Песня удалена'))
.catch(console.error);

Консоль браузера(через функцию)


function api(method, url, data) {
  const config = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };
  if (data) config.body = JSON.stringify(data);
  return fetch(url, config).then(r => r.json()).then(console.log).catch(console.error);
}


api('GET', '/api/songs');

api('POST', '/api/songs', { title: "Test", artist: "Me", genre: "Indie" });

api('PUT', '/api/songs/4', { title: "Updated", artist: "Me", genre: "Indie" });

api('DELETE', '/api/songs/4');


Postman

1. GET http://localhost:3000/api/songs

<img width="430" height="456" alt="image" src="https://github.com/user-attachments/assets/e5e002a0-8c24-412b-bc35-c2ac5edfa8b4" />


2.GET http://localhost:3000/api/songs?genre=Rock

<img width="596" height="735" alt="image" src="https://github.com/user-attachments/assets/e5a10101-0b22-460a-bb47-0cbfed7802e1" />


3. 
<img width="527" height="709" alt="image" src="https://github.com/user-attachments/assets/3a99e382-034a-42d7-8cb1-4b9804eab3fb" />

4. 
<img width="646" height="676" alt="image" src="https://github.com/user-attachments/assets/748c1f22-5ea9-4f36-b620-d7597a6003c5" />


5. 
<img width="453" height="110" alt="image" src="https://github.com/user-attachments/assets/10289cc6-3401-4350-8606-e4f86574e2c3" />

6.
<img width="774" height="746" alt="image" src="https://github.com/user-attachments/assets/b580117e-1db0-402b-ad4f-4ff8646363d3" />




7.
<img width="375" height="292" alt="image" src="https://github.com/user-attachments/assets/53b35b01-57a1-4953-b6ea-b96ec5331af1" />

<img width="549" height="78" alt="image" src="https://github.com/user-attachments/assets/9fe7a3a9-a3a4-457e-accd-17de2b9401aa" />
