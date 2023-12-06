export default function Course({item}) {
    return <>
    <h3>{Object.keys(item)}</h3>
    <ul>
        {Object.values(item).map(d => <li>{d}</li>)}
    </ul>
    </>
}