import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import boto3
from datetime import datetime
from dotenv import load_dotenv
import os
load_dotenv()

observer = Observer()

s3 = boto3.client('s3', aws_access_key_id=os.environ.get("AWS_ACCESS_KEY_ID"),
                  aws_secret_access_key=os.environ.get("AWS_SECRET_ACCESS_KEY"),
                  region_name=os.environ.get("AWS_REGION"))

class ImageHandler(FileSystemEventHandler):
    def on_created(self, event):
        if not event.is_directory:
            new_image_path = event.src_path

            # Obtiene la fecha y hora actual
            current_datetime = datetime.now().strftime("%Y%m%d%H%M%S")
            camera_info = "3"  # Reemplazar con  el número de cámara
            new_image_name = f"ICam_{camera_info}_Date_{current_datetime}.png"
            s3.upload_file(new_image_path, os.environ.get("AWS_BUCKET_NAME"), new_image_name) #Carga imagen
            print(f"Imagen cargada con éxito {new_image_name}")
            os.remove(new_image_path)

        
if __name__ == "__main__":
    event_handler = ImageHandler()
    observer.schedule(event_handler, path=os.environ.get("PATH_FOLDER"), recursive=False)
    observer.start()

    try:
        while True:
            time.sleep(5) 
    except KeyboardInterrupt:
        observer.stop()

    observer.join()
