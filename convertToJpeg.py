from PIL import Image
import os

def convert_to_jpeg(input_folder, output_folder):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    files = os.listdir(input_folder)
    webp_files = [f for f in files if f.endswith('.webp')]

    for webp_file in webp_files:
        file_name = os.path.splitext(webp_file)[0]
        im = Image.open(os.path.join(input_folder, webp_file)).convert("RGB")
        im.save(os.path.join(output_folder, f"{file_name}.jpeg"), "JPEG")

if __name__ == "__main__":
    input_folder = "G:/New folder (2)"  # backslashes
    output_folder = "G:/New folder (2)/Jpeg"  # backslashes
    convert_to_jpeg(input_folder, output_folder)
