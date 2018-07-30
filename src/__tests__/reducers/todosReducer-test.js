import todosReducer from '../../reducers/todosReducer';

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      todosReducer([], {
        type: 'ADD_TODO',
        text: 'First todo',
        id: 0,
      }),
    ).toEqual([{
      text: 'First todo',
      completed: false,
      id: 0,
    }]);

    expect(
      todosReducer([
        {
          text: 'First todo',
          completed: false,
          id: 0,
        },
      ], {
        type: 'ADD_TODO',
        text: 'Second todo',
        id: 1,
      }),

    ).toEqual([
      {
        text: 'First todo',
        completed: false,
        id: 0,
      }, {
        text: 'Second todo',
        completed: false,
        id: 1,
      }]);
  });

  it('should handle TOGGLE_TODO', () => {
    expect(
      todosReducer([{
        text: 'First todo',
        completed: false,
        id: 1,
      }], {
        type: 'TOGGLE_TODO',
        id: 1,
      }),
    ).toEqual([{
      text: 'First todo',
      completed: true,
      id: 1,
    }]);
  });
});
