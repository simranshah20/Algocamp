export default function modal({ close }){
    return (
        <div className="modal">
          <h2>Modal</h2>
          <p>Hello everyone</p>
          <button onClick={ close }>Close Modal</button>
        </div>
    )
}