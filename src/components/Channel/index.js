import Channel from "./Channel";
import { connect } from "react-redux";

const mapToStateProps = state => ({
  channels: state.channels
});

export default connect(mapToStateProps)(Channel);
