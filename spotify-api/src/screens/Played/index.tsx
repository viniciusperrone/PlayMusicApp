import React, { useState } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import Background from '../../components/Background';
import ChevronIcon from '../../components/icons/Chevron';
import MoreVertIcon from '../../components/icons/MoreVert';
import PlayIcon from '../../components/icons/Play';
import { 
    TopBar, 
    TopLeft, 
    TopMiddle, 
    TopRight, 
    ScreenArea, 
    CoverArea, 
    CoverImage, 
    Play,
    PlayerAuthor,
    PlayerTitle,
    Controls,
    Slider,
    AudioSlider,
    ControlsCurrentTime,
    ControlsTotalTime,
    ControlsPlay 
} from './style';

const Played: React.FC = () => {

    const [segundos, setSegundos] = useState(0);

    return (
        <Background>
            <LinearGradient
                colors={['#464769', '#1B1A1F']}
                style={{
                    flex: 1,
                }}>
                <TopBar>
                    <TopLeft>
                        <ChevronIcon />
                    </TopLeft>
                    <TopMiddle>
                        <Text style={style.title}>Tocando Podcast</Text>
                        <Text style={style.subtitle}>Vinicius Perrone Tech</Text>
                    </TopMiddle>
                    <TopRight>
                        <MoreVertIcon />
                    </TopRight>
                </TopBar>

                <ScreenArea>
                    <CoverArea>
                        <CoverImage
                            resizeMode="contain"
                            source={{
                                uri: "https://placehold.it/750x750",
                            }}
                        />
                    </CoverArea>

                    <Play>
                        <PlayerTitle>Frontend vs Backend - Lorenzo #142</PlayerTitle>
                        <PlayerAuthor>Vinicius Perrone Tech</PlayerAuthor>

                        <Controls>
                            <Slider>
                                <AudioSlider
                                    thumbTintColor="#FFFFFF"
                                    minimumTrackTintColor="#1DD65F"
                                    maximumTrackTintColor="#777777"
                                    minimumValue={0}
                                    maximumValue={100}
                                    value={segundos}
                                    onValueChange={(value: number) => {
                                      setSegundos(value);                  
                                    }}
                                />
                                <ControlsCurrentTime>0:{segundos}</ControlsCurrentTime>
                                <ControlsTotalTime>52:07</ControlsTotalTime>
                            </Slider>

                            <ControlsPlay>
                                <PlayIcon 
                                    width={88}
                                    height={88}
                                />
                            </ControlsPlay>

                        </Controls>
                    </Play>
                </ScreenArea>

            </LinearGradient>
        </Background>
    )
}

const style = StyleSheet.create({
    title: {
        color: '#fff'
    },
    subtitle: {
        color: '#fff'
    }
})

export default Played;