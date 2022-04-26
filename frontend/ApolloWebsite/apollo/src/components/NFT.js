import "./NFT.css";
function NFT(props) {
  const { eventName, artist, details, nftImg} = props;

  return (
    <div className="nft">
      <div className="nft-info">
        <div className="info-title"> NFT concert ticket</div>
        <img className="nft-benefits" src="https://i.ibb.co/tKsxnz9/Screen-Shot-2022-04-26-at-11-38-19-AM.png" alt=""></img>
      </div>
      <div className="nft-box">
        <img className="nft-img"src={nftImg} alt=""></img>
      </div>
      <div className="group-8">
        <p className="nft-name-of-eventh3">{eventName}</p>
        <p className="featured-artists-loc">
          <span className="span0">{artist}</span>
          <span className="poppins-normal-scarpa-flow-14px">{details}</span>
        </p>
      </div>
    </div>
  );
}
export default NFT;