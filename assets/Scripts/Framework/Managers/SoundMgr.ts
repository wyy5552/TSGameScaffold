
import { _decorator, Component, Node, AudioSource, AudioClip } from 'cc';
export class SoundMgr extends Component {
    public static Instance: SoundMgr = null as unknown as SoundMgr;
    private static MAX_SOUNDS: number = 8; // 最大音效的数目

    private nowIndex: number = 0;
    private sounds: Array<AudioSource> = [];
    private bgMusic: AudioSource = null as unknown as AudioSource;

    private isMusicMute: boolean = false;
    private isSoundMute: boolean = false;

    onLoad(): void {
        if(SoundMgr.Instance === null) {
            SoundMgr.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        
        for(let i = 0; i < SoundMgr.MAX_SOUNDS; i ++) {
            var as = this.node.addComponent(AudioSource);
            this.sounds.push(as);
        }

        this.bgMusic = this.node.addComponent(AudioSource) as AudioSource;

        // 从本地存储里面把设置读出来, 0, 1
        var value = localStorage.getItem("GAME_MUSIC_MUTE");
        if(value) {
            let v = parseInt(value);
            this.isMusicMute = (v === 1)? true : false;
        }

        value = localStorage.getItem("GAME_SOUND_MUTE");
        if(value) {
            let v = parseInt(value);
            this.isSoundMute = (v === 1)? true : false;
        }
    }

    public playBgMusic(clip: AudioClip, isLoop: boolean): void {
        this.bgMusic.clip = clip;
        this.bgMusic.loop = isLoop;
        this.bgMusic.volume = (this.isMusicMute)? 0 : 1.0;
        this.bgMusic.play();
    }

    public stopBgMusic(): void {
        this.bgMusic.stop();
    }

    public playSound(clip: AudioClip): void {
        if(this.isSoundMute === true) {
            return;
        }

        var as = this.sounds[this.nowIndex];
        this.nowIndex ++;
        if(this.nowIndex >= SoundMgr.MAX_SOUNDS) {
            this.nowIndex = 0;
        }

        as.clip = clip;
        as.loop = false;
        as.play();
    }

    public playSoundOneShot(clip: AudioClip): void {
        var as = this.sounds[this.nowIndex];
        this.nowIndex ++;
        if(this.nowIndex >= SoundMgr.MAX_SOUNDS) {
            this.nowIndex = 0;
        }

        as.clip = clip;
        as.loop = false;
        as.playOneShot(clip);
    }

    public setMusicMute(isMute: boolean): void {
        this.isMusicMute = isMute;
        this.bgMusic.volume = (this.isMusicMute)? 0 : 1.0;

        // localStorage
        let value = (isMute)? 1 : 0;
        localStorage.setItem("GAME_MUSIC_MUTE", value.toString());
        // end
    }

    public setSoundsMute(isMute: boolean): void {
        this.isSoundMute = isMute;

        // localStorage
        let value = (isMute)? 1 : 0;
        localStorage.setItem("GAME_SOUND_MUTE", value.toString());
    }
}

