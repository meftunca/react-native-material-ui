import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {Ripple, Collapse, Surface, Button, Text} from './../src';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CollapsePage = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <SafeAreaView>
      <Ripple
        style={{margin: 16}}
        rippleOpacity={0.1}
        onPress={() => setExpanded(!expanded)}>
        <Surface padding={[10, 16]} margin={0} elevation={2}>
          <Text variant="button">Ripple Button</Text>
        </Surface>
      </Ripple>
      <Collapse delay={50} duration={500} expanded={expanded}>
        <Surface direction="column">
          <Button variant="contained">contained</Button>
          <Button variant="contained" cornerRadius={30}>
            contained Round
          </Button>
          <Button variant="outlined" icon="cards">
            Outlined
          </Button>
          <Button variant="outlined" cornerRadius={30}>
            Outlined Round
          </Button>
        </Surface>
      </Collapse>
    </SafeAreaView>
  );
};

export default CollapsePage;
