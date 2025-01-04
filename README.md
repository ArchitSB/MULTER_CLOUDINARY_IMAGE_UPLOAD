# MULTER_CLOUDINARY_IMAGE_UPLOAD
A Node.js-based project that allows users to upload images in various formats, resize them, and store the processed images in a database (Supabase). The project leverages Cloudinary for image manipulation, Multer for file uploads, and Sequelize for database interaction. This application is designed to streamline image handling with efficient storage and processing.

## 🚀 Features
Image Upload: Users can upload images in multiple formats (JPEG, PNG, WebP, etc.).
Image Resizing: Automatically resizes uploaded images for optimized storage and display.
Cloud Integration: Uses Cloudinary for advanced image processing and hosting.
Database Storage: Stores image metadata in Supabase for easy retrieval and management.
Secure Operations: Utilizes JWT for user authentication.
Scalable Architecture: Built using modular components with Express and Sequelize.
Frontend Integration: React-based interface for seamless user interaction.

## 🛠️ Technologies and Dependencies

### Backend
Node.js: Server-side runtime.
Express: Web framework for building APIs.
Multer: Middleware for handling multipart/form-data.
Cloudinary: Cloud-based image manipulation.
Sharp: For resizing and image processing.
Sequelize: ORM for database management.
Supabase: Database for storing metadata.
JWT: Secure authentication.
dotenv: Environment variable management.
MySQL2 & PG: Database drivers.

### Frontend
React: Frontend framework for UI development.
Redux Toolkit: State management.
Axios: HTTP client for API integration.

### Dev Tools
Webpack: Module bundler for building frontend assets.
Babel: JavaScript transpiler.
Nodemon: Development tool for live server updates.

## 📦 Installation and Setup
1. npm install
2. Setup Enviornment Variables: CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
DB_USER =
DB_PASSWORD= 
DB_NAME=
DB_HOST=
DB_PORT= 
SUPABASE_PASSWORD =
SUPABASE_URL=
SUPABASE_KEY=
DATABASE_URL =
JWT_SECRET =
3. Run database migration: npx sequelize-cli db:migrate
4. Push the migrations to database
5. Start both backend and frontend server respectively.

## 🔧 Usage
Open your browser and navigate to the frontend (React-based interface) or test APIs via tools like Postman.
Upload images via the provided interface or API endpoint.
View resized images hosted on Cloudinary, and metadata stored in Supabase.

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page for known issues or submit a pull request.

## 📞 Contact
For any queries or support, feel free to reach out:

 1. Name: Archit Singh Baghel
 2. Email: workarchit999@gmail.com
 3. GitHub: ArchitSB

## 🌟 Acknowledgements

Cloudinary
Supabase
Multer
Sharp


