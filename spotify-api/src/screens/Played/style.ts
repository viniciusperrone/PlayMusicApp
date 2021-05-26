import styled from 'styled-components/native';

export const TopBar = styled.View`
    flex-direction: row;
    margin-top: 10;
`;

export const TopLeft = styled.View`
    flex: 1;
    padding-left: 16px;
`;

export const TopMiddle = styled.View`
    flex: 2;
    align-items: center;
`;

export const TopRight = styled.View`
    flex: 1;
    padding-right: 16px;
    align-items: flex-end;
`;

export const ScreenArea = styled.View`
    flex: 1;
    padding-left: 32px;
    padding-right: 32px;
`;

export const CoverArea = styled.View`
    flex: 4;

`;

export const CoverImage = styled.Image`
    width: 100%;
    flex: 1;
`;

export const Play = styled.View`
    flex: 2; 
    justify-content: flex-end;
`;

export const PlayerTitle = styled.Text`
    color: white;
    font-size: 24px;
`;

export const PlayerAuthor = styled.Text`
    color: #BBBBBB;
    font-size: 16px;
`;

export const Controls = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

export const ControlsPlay = styled.TouchableOpacity``;

export const Slider = styled.View`
    flex-basis: 100%;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const ControlsCurrentTime = styled.Text`
    color: #BBBBBB;
`;

export const ControlsTotalTime = styled.Text`
    color: #BBBBBB;
`;

export const AudioSlider = styled(Slider)`
    flex-basis: 100%;
`;





