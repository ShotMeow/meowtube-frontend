export interface IVideoElement extends HTMLVideoElement {
	msRequestFullscreen?: () => void
	mozRequestFullScreen?: () => void
	webkitRequestFullscreen?: () => void
}
