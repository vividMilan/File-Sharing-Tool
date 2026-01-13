## File Sharing Tool

This is a tool that I have developed to share files locally with my friends in case of where *there are no pendrives or data cables*. I've been thinking to make this tool for a long time

### 🕑 When it could come in handy.  When there is,

- No pendrive
- Data cables
- No Internet connection

### ✅ Advantages

- You only need to have this on one PC.
- Can upload or download files even via a smart phone
- No internet required

### ⛔ Do not
- No authentication is implemented
- Any one in the same network can access it
- Stop the server immediately after use

### 🧠 Keep in mind
```This tool is built to use among friends or a small group```

```Might need to refresh once you upload a file```

```Make sure to connect to a same wireless network```

# How to Use

1. Clone the repo

```bash
git clone https://github.com/vividMilan/File-Sharing-Tool.git
```
2. Install npm modules

```bash
npm install
```

3. Install npm modules

```bash
node server.js
```

you should see a output like this

```bash
Server running on 3000
```

4. Find your ip address (HOST IP)

Windows: 

```bash
ipconfig
```

take a note of your **IPv4 Address**  
Example:

```cpp
192.168.8.100
```

5. Tell your friends to type your ip address and the port number (3000) in their browser

```cpp
192.168.8.100:3000
```

You are all set now you can upload and download files 


```
Happy Sharing 🎉
```


