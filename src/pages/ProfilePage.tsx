import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { username } = useParams();
  return (
    <div className="min-h-[25vh] flex mt-24 px-10">
      Witaj {username}! Profile page bedzie dostepny po zrobieniu bazy danych uzytkownikow
    </div>
  )
}