//
//  MyAudio.h
//  vocabulary
//
//  Created by Nguyen Van MAN on 2/22/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

// MyAudio.h
#import <React/RCTBridgeModule.h>
#import <AVFoundation/AVFoundation.h>
@interface MyAudio : NSObject <RCTBridgeModule>
@property (strong, nonatomic) AVAudioPlayer *audioPlayer;
@end
