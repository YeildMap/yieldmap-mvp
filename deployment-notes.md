# Deployment Notes

## Netlify (Frontend)
- Push frontend to GitHub
- Connect Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

## Render (Backend)
- Push backend to GitHub
- Create new web service
- Set build command: `pip install -r requirements.txt`
- Set start command: `python app.py`
