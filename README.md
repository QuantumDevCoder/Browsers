# Browsers
A collective library of Dockerfile browsers, put together into a docker image. (Browsers include Microsoft Edge, FireFox, Opera, etc.)

## USAGE:
1. Use the Dockerfiles provided within the existing browser folder, and package/push an Docker Hub Image So that you can keep your own version, (⚠ Note: No Image Pushed will result in your own data in the risk of being deleted from newer image versions overlappping the existing image)

2. Use the Browser configuration files to Access the Root Container.
   ```bash
   (Files that End With [.conf] In the Root Folder Of The Browser)
   ```

3. Deploy The Dockerfile, And Enjoy.

## - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
|CREDIT TO [@MRColorR](https://github.com/MRColorR) For the Base Idea!|
## - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

## Docker Compose
1. Select an Browser From the list below:
   
  | **Type** | **Browser**            | **Size** |
  |---|---|---|
  | `edge` | Microsoft Edge            | 556.02 MB |
  | `opera`| Opera Browser             | 467.24 MB |
  | `chrome`| Google Chrome            | 471.67 MB |
  | `chromium`| Google Chromium        | 465.91 MB |
  | `firefox` | Mozilla Firefox        | 403.18 MB |
  | `brave`  | Brave Software Inc.     | 481.35 MB |
  | `vivaldi`| Vivaldi Technologies Inc. | 480.26 MB |

## EXAMPLES START
2. Apply it to the Docker Compose file, Here is an example (I am going to use Microsoft Edge For this Example)
   ### EXAMPLE Docker Tag: dockerbrowsers/edge:latest
   1. Note that After `dockerbrowsers/`, there is the "Type" name of the Browser in the Chart Above. (E.G. In this case `edge` would be Microsoft Edge)

3. Use this example tempelate of the Microsoft edge docker compose:
```yaml
version: "3.9"

services:
  browser:
    image: dockerbrowsers/edge:latest
    container_name: edge_browser
    restart: unless-stopped
    ports:
      - "6080:6080"   
    environment:
      - ENV_VAR=example
```
### Then, After connecting to the 6080 port, you should be at this "Directory Listing For" screen: <img width="1365" height="738" alt="Screenshot 2025-12-01 10 05 18 PM" src="https://github.com/user-attachments/assets/91a6b314-cdeb-4b58-a802-78386f38960f" />
1. Click on the `vnc.html` Link, and you should now be at <img width="1365" height="911" alt="image" src="https://github.com/user-attachments/assets/b7213f91-0d1e-4230-bdd4-c13a8b6886d7" />
2. Click on `Connect` And Based On your browser selection, put the browser name at the first, then add the word "admin" after it (E.G. If using Edge, the password would be `edgeadmin`)
3. Enjoy your New Browser!

# SCREENSHOTS
<img width="200" height="133" alt="image" src="https://github.com/user-attachments/assets/9f7ceba3-d70f-4088-bf46-65f361adcead" /> <img width="200" height="152" alt="image" src="https://github.com/user-attachments/assets/60bfa7d2-54c1-4125-bfa8-95d7eb3b2ccf" /> <img width="200" height="133" alt="image" src="https://github.com/user-attachments/assets/afb4fedf-5346-42b7-a2b3-f41328081dcf" />




