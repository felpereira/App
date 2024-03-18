import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../app/components/Button/button'; // Importe o componente Button
import { TouchableOpacity, Text } from 'react-native'; // Importe os componentes necessários


// Renders a TouchableOpacity component with onPress function and Text component with text prop
it('should render TouchableOpacity and Text components with correct props', () => {
  const mockOnPress = jest.fn();
  const mockText = 'Test Button';
  const mockStyle = { flexDirection: 'row', gap: 10, width: '50%' };

  const wrapper = shallow(<Button text={mockText} onPress={mockOnPress} style={mockStyle} />);

  expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
  expect(wrapper.find(TouchableOpacity).prop('style')).toEqual(styles(mockStyle).buttonStyle);
  expect(wrapper.find(Text)).toHaveLength(1);
  expect(wrapper.find(Text).prop('style')).toEqual(styles().buttonText);
  expect(wrapper.find(Text).text()).toEqual(mockText);
  expect(wrapper.find(Icon)).toHaveLength(0);
  expect(wrapper.find(TouchableOpacity).prop('onPress')).toEqual(mockOnPress);
});