import React, { ReactNode, useCallback, useRef, useState } from 'react';
import { ChatTeardropDots } from 'phosphor-react-native';
import { TouchableOpacity  } from 'react-native';

import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Options } from '../Options';
import { Form } from '../Form';
import { Success } from '../Success';

import { Copyright } from '../Copyright';

import { feedbackTypes } from '../../utils/feedbackTypes';
import { theme } from '../../theme';
import { styles } from './styles';

export type FeedbackType = keyof typeof feedbackTypes;

interface Props {
  children?: ReactNode;
}

function WidgetWrapper({children} : Props) {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackSheetIndex, setFeedbackSheetIndex] = useState< -1 |0 | 1 >(-1);
  
  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  function handleFeedbackReset() {
    setFeedbackType(null);
    setFeedbackSent(false);
  }

  function handleFeedbackSent() {
    setFeedbackSent(true);
  }

  const renderBackdrop = useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <>
      {children}


      <TouchableOpacity style={styles.button}
        onPress={handleOpen}>
        <ChatTeardropDots size={24}
          color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>
      
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        index={feedbackSheetIndex}
        backgroundStyle={styles.modal}
        backdropComponent={renderBackdrop}
        handleIndicatorStyle={styles.indicator}
        enablePanDownToClose
        onClose={handleFeedbackReset}>

        {
          feedbackSent
            ?
            <Success onSendAnotherFeedback={handleFeedbackReset} />
            :
            (
              feedbackType
                ?
                <Form
                  feedbackType={feedbackType}
                  onFeedbackReset={handleFeedbackReset}
                  onFeedbackSent={handleFeedbackSent}
                  onFeedbackTakingScreenshot={setFeedbackSheetIndex}/>
                :
                <Options
                  onFeedbackTypeChanged={setFeedbackType}/>
            )
        }

        <Copyright />
      </BottomSheet>
      
    </>
  );
}

export default gestureHandlerRootHOC(WidgetWrapper);