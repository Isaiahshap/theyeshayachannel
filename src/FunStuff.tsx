import './App.css'; // Import general styles

function FunStuff() {
  return (
    <div id="bg" style={{
      display: 'flex', // Use flexbox to align children
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      position: 'relative', // Set the container to relative
      height: '100vh', // Ensure full viewport height
      width: '100vw' // Ensure full viewport width
    }}>
      {/* Image centered within the div */}
      <img src="aol.gif" alt="Click here!" width="302" height="249" style = {{
        display: 'fixed',
        position:'relative'
      }}/>
      {/* Other content can go here */}
    </div>
  );
}

export default FunStuff;
