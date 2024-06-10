/**
 * @param {string} postId 글 식별자
 * @returns {string} 이미지 경로
 */
export function getPostBannerFromId(postId) {
    return `/banner/${postId}.webp`
}
