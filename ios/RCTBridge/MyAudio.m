//
//  MyAudio.h
//  vocabulary
//
//  Created by Nguyen Van MAN on 2/22/18.
//  Copyright © 2018 Facebook. All rights reserved.
//

// MyAudio.h
#import "MyAudio.h"
#import <React/RCTLog.h>

@implementation MyAudio

// To export a module named CalendarManager
RCT_EXPORT_MODULE();

// This would name the module AwesomeCalendarManager instead
// RCT_EXPORT_MODULE(AwesomeCalendarManager);

RCT_EXPORT_METHOD(play:(NSString *)filePath)
{
  NSArray *paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
  NSString *documentsDirectory = [paths objectAtIndex:0];
  NSLog(@"documentsDirectory: %@", documentsDirectory);
  NSURL *soundURL = [NSURL fileURLWithPath : [NSString stringWithFormat:@"%@/%@", documentsDirectory, filePath]];
  self.audioPlayer = [[AVAudioPlayer alloc] initWithContentsOfURL:soundURL error:nil];
  [self.audioPlayer play];
}

RCT_EXPORT_METHOD(playFromURL:(NSString *)url)
{
  NSURL *soundURL = [NSURL URLWithString:url];
  NSData *soundData = [NSData dataWithContentsOfURL:soundURL];
  self.audioPlayer = [[AVAudioPlayer alloc] initWithData:soundData error:nil];
  [self.audioPlayer play];
}
@end
