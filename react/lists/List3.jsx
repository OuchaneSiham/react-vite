// filter
import PropTypes, { element } from "prop-types"
function List3({category="Category", items=[]})
{
    // const category = props.category;
    // const lists = props.items;
    const checkdata = {category, items};
    PropTypes.checkPropTypes(List3.propTypes, checkdata, 'prop', List3)
                const listitems = items.map(element => {
                    let name = element.name;
                    let age = element.age;
                    let id = element.id;
                    if (!name) { name = "Guest"; }
                    if (!age) { age = 0; }
                    if (!id) { id = 0; }
                    return (
                        <li key={id}>
                            {name}: &nbsp;
                            <b>{age}</b>
                        </li>
                    );
                });
    return(
        <> 
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listitems}</ol>
        </>
)
}
List3.propTypes={
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, age: PropTypes.number}))

}
export default List3