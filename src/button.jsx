
function Button(){
    const styles = {
  padding:"10px 20px",
  backgroundColor: "transparent",
  border:"none",
  boxShadow: "5px 10px 15px 10px hsla(0,0%,0%,0.1)",
  borderRadius: "10px",
  width: "120px",
  height:"50px",
  font:"oblique normal bold 15px/2 'open sans', sans-serif",
  color:" hsl(0, 0%, 20%)",
  cursor: "pointer",
  margin:"30px",

    }
    return(
        <button style={styles}>click me</button>
    )
}
export default Button;