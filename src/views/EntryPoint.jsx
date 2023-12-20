import useRedirection from '../hooks/useRedirection';

function EntryPoint() {
    useRedirection("/books", 3000);
}

export default EntryPoint;