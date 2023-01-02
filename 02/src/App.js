import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import './App.css';

function App() {
  return (
    <main className="App">
      <PostsList />
      <AddPostForm />
    </main>
  );
}

export default App;
