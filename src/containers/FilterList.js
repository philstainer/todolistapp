import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { VisibilityFilters, setVisibilityFilter } from '../actions';

export class UnConnectedFilterList extends React.PureComponent {
  static propTypes = {
    visibilityFilter: PropTypes.string.isRequired,
  }

  render() {
    const { visibilityFilter } = this.props;

    return (
      <div data-test="component-filterlist">
        <span>
          Show:
        </span>

        <button data-test="filter-button" disabled={visibilityFilter === VisibilityFilters.SHOW_ALL} onClick={() => this.props.setVisibilityFilter(visibilityFilter.SHOW_ALL)}>
          All
        </button>

        <button data-test="filter-button" disabled={visibilityFilter === VisibilityFilters.SHOW_ACTIVE} onClick={() => this.props.setVisibilityFilter(visibilityFilter.SHOW_ACTIVE)}>
          Active
        </button>

        <button data-test="filter-button" disabled={visibilityFilter === VisibilityFilters.SHOW_COMPLETED} onClick={() => this.props.setVisibilityFilter(visibilityFilter.SHOW_COMPLETED)}>
          Completed
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ visibilityFilter }) => ({
  visibilityFilter,
});

export default connect(mapStateToProps, { setVisibilityFilter })(UnConnectedFilterList);
