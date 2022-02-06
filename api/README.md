# Backend Node API

This API runs on a very simple **express** application. The only additional packages leveraged were **mongoose** to streamline the mongodb integration, as well as **cors** for simplicity.

## Routes

- **POST** `/users/login`

  - Checks if user exists:

```
    { username: "me@example.com" }
```

- **POST** `/users/register`

  - Creates user if they don't exist

```
  { username: "me@example.com" }
```

- **GET** `/messages/:roomId`

  - Lists all messages in a room:

- **POST** `/messages/:roomId`
  - Adds a new message to a room:

```
{
  text: "This is added to the chat room",
  username: "me@example.com"
}
```

- **GET** `/rooms/`
  - Lists all rooms, sorted by most recently active
- **POST** `/rooms/`
  - Creates a new room

```
{ name: exampleroomname }
```
