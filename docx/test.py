import os

for root, dirs, files in os.walk("."):
    path = root.split(os.sep)
    print((len(path) - 1) * '---', os.path.basename(root))
    for file in files:
        if file == '_index.md':
            # os.remove(root + "\\" + file)
            os.rename(root + "\\" + file, root + "\\README.md")


        print(len(path) * '---', file)
