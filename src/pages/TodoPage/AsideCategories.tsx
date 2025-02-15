const AsideCategories = ({categories}) => {
  return (
    <aside>
        <ul>
        {categories.map(category => (
            <li>{category}</li>
        ))}
        </ul>
    </aside>
  )
}

export default AsideCategories