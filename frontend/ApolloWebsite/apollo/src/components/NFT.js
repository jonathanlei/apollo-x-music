function NFT(props) {
  const { eventName, artist, details, nftImg} = props;

  return (
    <div className="nft">
      <div className="unsplashru-jm3d-bx-cqw">
        <img src={nftImg} alt=""></img>
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