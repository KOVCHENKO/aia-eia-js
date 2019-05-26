import store from "@/store";
import en from "../../src/plugins/en.json";
import fr from "../../src/plugins/fr.json";


describe("i18n", () => {
    it("keys in fr.json and en.json are equal", () => {
        const enMessages: any = Object.keys(en);
        const frMessages: any = Object.keys(fr);

        for (const enMessage of enMessages) {

            for (const frMessage of frMessages) {

                expect(enMessage).toEqual(frMessage);

                frMessages.shift();

                break;
            }

        }
    });
});
