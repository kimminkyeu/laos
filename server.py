import http.server
import socketserver
import os

PORT = 8000
DIRECTORY = os.path.dirname(__file__)

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Serving at http://localhost:{PORT}")
    print(f"Serving files from: {DIRECTORY}")
    print("\nTo stop the server, press Ctrl+C")
    httpd.serve_forever()
