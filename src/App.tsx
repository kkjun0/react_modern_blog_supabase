import { Navigate, Route, Routes } from "react-router";
import Default from "./layouts/Default";
import LoginSocial from "./pages/auth/LoginSocial";
import BlogList from "./pages/blog/BlogList";
import BlogDetail from "./pages/blog/BlogDetail";
import Profile from "./pages/profile/Profile";
import BlogCreate from "./pages/blog/BlogCreate";
import ProfileSetup from "./pages/auth/ProfileSetup";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Default />}>
          <Route index element={<Navigate to="/blog" />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/create" element={<BlogCreate />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="login" element={<LoginSocial />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile-setup" element={<ProfileSetup />} />
        </Route>
      </Routes>
    </>
  );
}
