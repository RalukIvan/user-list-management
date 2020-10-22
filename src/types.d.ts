interface User {
    lastname: string;
    firstname: string;
    email: string;
}

type AddUser = (user: User) => void;
type SearchUser = (searchString: string) => void;