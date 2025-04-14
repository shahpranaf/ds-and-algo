const DynamicArray = require('./implementArray');

describe('DynamicArray', () => {
  let array;

  beforeEach(() => {
    array = new DynamicArray();
  });

  test('should initialize with length 0', () => {
    expect(array.length).toBe(0);
    expect(array.data).toEqual({});
  });

  describe('push()', () => {
    test('should add items and increase length', () => {
      expect(array.push('A')).toBe(1);
      expect(array.push('B')).toBe(2);
      expect(array.get(0)).toBe('A');
      expect(array.get(1)).toBe('B');
      expect(array.length).toBe(2);
    });
  });

  describe('pop()', () => {
    test('should remove and return the last item', () => {
      array.push('A');
      array.push('B');
      expect(array.pop()).toBe('B');
      expect(array.length).toBe(1);
      expect(array.get(1)).toBeUndefined();
    });

    test('should return undefined when popping from empty array', () => {
      expect(array.pop()).toBeUndefined();
    });
  });

  describe('get()', () => {
    test('should return the correct item by index', () => {
      array.push('A');
      array.push('B');
      expect(array.get(0)).toBe('A');
      expect(array.get(1)).toBe('B');
    });

    test('should return undefined for invalid indices', () => {
      expect(array.get(100)).toBeUndefined();
      expect(array.get(-1)).toBeUndefined();
    });
  });

  describe('insert()', () => {
    test('should insert item at correct index', () => {
      array.push('A');
      array.push('C');
      array.insert(1, 'B');
      expect(array.get(1)).toBe('B');
      expect(array.length).toBe(3);
    });

    test('should return undefined for invalid index', () => {
      expect(array.insert(-1, 'X')).toBeUndefined();
      expect(array.insert(100, 'X')).toBeUndefined();
    });
  });

  describe('remove()', () => {
    test('should remove item at correct index and return it', () => {
      array.push('A');
      array.push('B');
      array.push('C');
      expect(array.remove(1)).toBe('B');
      expect(array.get(1)).toBe('C');
      expect(array.length).toBe(2);
    });

    test('should return undefined for invalid index', () => {
      expect(array.remove(100)).toBeUndefined();
      expect(array.remove(-1)).toBeUndefined();
    });

    test('should return undefined when removing from empty array', () => {
      expect(array.remove(0)).toBeUndefined();
    });
  });

  describe('Edge Cases', () => {
    test('should handle inserting at the start', () => {
      array.push('B');
      array.insert(0, 'A');
      expect(array.get(0)).toBe('A');
      expect(array.get(1)).toBe('B');
    });

    test('should handle inserting at the end', () => {
      array.push('A');
      array.insert(1, 'B');
      expect(array.get(1)).toBe('B');
      expect(array.length).toBe(2);
    });

    test('should handle removing the last element', () => {
      array.push('A');
      array.push('B');
      expect(array.remove(1)).toBe('B');
      expect(array.length).toBe(1);
    });

    test('should handle removing the first element', () => {
      array.push('A');
      array.push('B');
      expect(array.remove(0)).toBe('A');
      expect(array.get(0)).toBe('B');
      expect(array.length).toBe(1);
    });
  });
});
