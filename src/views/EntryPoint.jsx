import useRedirection from '../hooks/useRedirection';

function EntryPoint() {
    useRedirection("/books", 0);
}

export default EntryPoint;