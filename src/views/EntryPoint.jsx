import useRedirection from '../hooks/useRedirection';

function EntryPoint() {
    useRedirection("/books", 3000);

    return (
        <>
            <div className='loader'></div>
        </>
    )
}

export default EntryPoint;