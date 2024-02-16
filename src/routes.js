import HomePage from "./pages/HomePage";
import LearningPage from "./pages/LearningPage";
import ConversationPage from "./pages/ConversationPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/LearningPage",
    component: LearningPage,
  },
  {
    path: "/ConversationPage",
    component: ConversationPage,
  },
  {
    path: "/LoginPage",
    component: LoginPage,
  },
  {
    path: "/SignupPage",
    component: SignupPage,
  },
];

export default routes;
