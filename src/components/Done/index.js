import Done from "./Done";
import { connect } from "react-redux";
import { setInput, filterLists } from "actions";

const mapStateToProps = state => ({
  totalLists: state.totalLists,
  value: state.value,
  viewList: state.viewList
});

const mapDispatchToProps = dispatch => ({
  setInput: value => dispatch(setInput(value)),
  filterLists: viewList => dispatch(filterLists(viewList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Done);
