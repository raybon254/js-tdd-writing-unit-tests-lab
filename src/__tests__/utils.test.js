// Your tests here
// Your code here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns words combination of upper and lowercase ", () => {
        const word = "raCecAr"
        const result = isPalindrome(word)

        expect(result).toBe(true)
    })
    it("backward or frontward combination ", () => {
        const word = "racecar"
        const  result = isPalindrome(word)

        expect(result).toBe(true)
    })
    it(" return false for a non-palindrome", () => {
        const word = "car"
        const result = isPalindrome(word)

        expect(result).toBe(false)
    })
    it("return false for an empty string ", () => {
        const word = " "

        expect(() => isPalindrome(word)).toThrow("Invalid input")
    })

    it("throw error fro non-alpabetical characters ", () => {
        const word = " race car"

        expect(() => isPalindrome(word)).toThrow("Invalid input")
    })

    it("throw error if input is not a string ", () => {
        const word = 12345;
        expect(() => isPalindrome(word)).toThrow("Invalid input");
    })
})
