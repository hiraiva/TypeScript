/// <reference path='fourslash.ts' />

////class C {
////<<<<<<< HEAD
////v = 1;
////=======
////v = 2;
////>>>>>>> Branch - a
////}

format.document();
verify.currentFileContentIs(`class C {
<<<<<<< HEAD
    v = 1;
=======
v = 2;
>>>>>>> Branch - a
}`);
