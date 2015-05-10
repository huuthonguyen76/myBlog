(function() {
  'use strict';
  angular.module('data-struct.factories', [])

    /**
     * Traverse all stacks
     *
     * To find all cases will occur with current stacks
     *
     * @param  {array} 
     * @return {array} all cases may occur
     */
    .factory('traverseStacks', ['objectUtilities', function(objectUtilities) {
      var traverseStacks = function(stacks) {
        if ( ! stacks[0]) {
          return;
        }

        /**
         * Stack's Processed
         *
         * Clone stacks and modified some stuff for traversing
         *
         * @var {array}
         */
        var stacksProcessed = []; 

        /**
         * Step Current
         *
         * Tracking status of current step
         *
         * @var {object}
         *
         * @property  level of step's deep
         * @route     current step's route
         */
        var stepCurrent = {
          'level' : 0,
          'route' : []
        };

        /**
         * Case Storage
         *
         * Store all case would occur with preceding stack
         *
         * @var {array} 
         */
        var caseStorage = [];

        /**
         * Case Current
         *
         * Use for cloning step's route value, after that push into caseStorage
         *
         * @var {array} 
         */
        var caseCurrent;

        for (var i = 0; i < stacks.length; i++) {
          stacksProcessed.push({
            'origin'    : objectUtilities.cloneObject(stacks[i]),
            'current'   : objectUtilities.cloneObject(stacks[i])
          });
        }

        // Add boundary to head and tail of stack for tracking start or end.
        stacksProcessed.unshift({
          'origin'      : [0],
          'current'     : [0]
        });
        stacksProcessed.push({
          'origin'      : null,
          'current'     : null
        });

        do {

          // If current stacks is empty
          if (objectUtilities.isArrayEmpty(stacksProcessed[stepCurrent['level']]['current'])) {

            // Clone value of current route and push into storage, but we need to pop out the first element
            caseCurrent = objectUtilities.cloneObject(stepCurrent['route']);
            caseCurrent.shift();
            caseStorage.push(caseCurrent);

            // Restore each stack which step has gone and go up until step's current stack not empty
            while ((stepCurrent['level'] > 0) && (objectUtilities.isArrayEmpty(stacksProcessed[stepCurrent['level']]['current']))) {
              stacksProcessed[stepCurrent['level']]['current'] = objectUtilities.cloneObject(stacksProcessed[stepCurrent['level']]['origin']);
              stepCurrent['level'] = stepCurrent['level'] - 1;
              stepCurrent['route'].pop();
            }
          } else {

            // Push current element of stack and go deeper
            stepCurrent['route'].push(stacksProcessed[stepCurrent['level']]['current'].pop());  
            stepCurrent['level'] += 1;
          }
        } while (stepCurrent.level > 0);

        // Free up memory
        stepCurrent     = null;
        stacksProcessed = null;
        caseCurrent     = null;

        return caseStorage;
      }

      return traverseStacks;
    }]);
})();