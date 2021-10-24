export const checkIsFilesSizeNotTooBig = (files: FileList | File[], maxMbSize?: number): boolean => {
    let size = 0;
    const MB = 1024 * 1024;
    const maxSize = MB * (maxMbSize || 20);
    for(let i = 0; i < files.length; i++) {
        size += files[i].size;
    }
    if(size > maxSize) {
        return false;
    }
    else {
        return true;
    }
}